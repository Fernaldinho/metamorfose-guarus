export type MatriculaData = {
  nome: string;
  nascimento: string;
  cpf: string;
  whatsapp: string;
  plano: string;
  objetivo: string;
  horario: string;
  observacoes: string;
};

export const MATRICULA_INICIAL: MatriculaData = {
  nome: "",
  nascimento: "",
  cpf: "",
  whatsapp: "",
  plano: "",
  objetivo: "",
  horario: "",
  observacoes: "",
};

export const MATRICULA_OBJETIVOS = [
  "Emagrecimento",
  "Hipertrofia",
  "Condicionamento físico",
  "Saúde e bem-estar",
];

export const MATRICULA_HORARIOS = ["Manhã", "Tarde", "Noite"];

/** Aplica máscara brasileira: (22) 99889-7753 */
export function maskPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Aplica máscara de data: 12/03/1998 */
export function maskDate(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 8);
  if (d.length <= 2) return d;
  if (d.length <= 4) return `${d.slice(0, 2)}/${d.slice(2)}`;
  return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
}

/** Aplica máscara de CPF: 123.456.789-00 */
export function maskCpf(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

/** Valida data real DD/MM/AAAA: não futura, ano >= 1900. */
export function isValidBirthdate(value: string): boolean {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value.trim());
  if (!m) return false;
  const day = Number(m[1]);
  const month = Number(m[2]);
  const year = Number(m[3]);
  const now = new Date();
  if (year < 1900 || year > now.getFullYear()) return false;
  if (month < 1 || month > 12) return false;
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  )
    return false;
  // zera a hora para comparar só a data
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return date <= today;
}

/** Valida CPF com dígitos verificadores. */
export function isValidCpf(value: string): boolean {
  const d = value.replace(/\D/g, "");
  if (d.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(d)) return false;
  const calc = (len: number) => {
    let sum = 0;
    for (let i = 0; i < len; i++) sum += Number(d[i]) * (len + 1 - i);
    const mod = (sum * 10) % 11;
    return mod === 10 ? 0 : mod;
  };
  return calc(9) === Number(d[9]) && calc(10) === Number(d[10]);
}

export type MatriculaErrors = Partial<Record<keyof MatriculaData, string>>;

export function validateMatricula(d: MatriculaData): MatriculaErrors {
  const errors: MatriculaErrors = {};

  if (d.nome.trim().length < 3) errors.nome = "Informe seu nome completo.";

  if (!d.nascimento.trim()) errors.nascimento = "Informe sua data de nascimento.";
  else if (!isValidBirthdate(d.nascimento))
    errors.nascimento = "Data inválida. Use DD/MM/AAAA.";

  const cpfDigits = d.cpf.replace(/\D/g, "");
  if (!cpfDigits) errors.cpf = "Informe seu CPF.";
  else if (!isValidCpf(d.cpf)) errors.cpf = "CPF inválido. Confira os números.";

  const digits = d.whatsapp.replace(/\D/g, "");
  if (!digits) errors.whatsapp = "Informe seu WhatsApp.";
  else if (digits.length < 10 || digits.length > 11)
    errors.whatsapp = "Número incompleto. Use DDD + número.";

  if (!d.plano) errors.plano = "Escolha um plano.";
  if (!d.objetivo) errors.objetivo = "Escolha seu objetivo.";
  if (!d.horario) errors.horario = "Escolha um horário.";

  if (d.observacoes.trim().length > 300)
    errors.observacoes = "Máximo de 300 caracteres.";

  return errors;
}

const OBRIGATORIOS: (keyof MatriculaData)[] = [
  "nome",
  "nascimento",
  "cpf",
  "whatsapp",
  "plano",
  "objetivo",
  "horario",
];

/** 0 a 100 — campos obrigatórios válidos. */
export function matriculaProgress(d: MatriculaData): number {
  const errors = validateMatricula(d);
  const ok = OBRIGATORIOS.filter((k) => !errors[k]).length;
  return Math.round((ok / OBRIGATORIOS.length) * 100);
}

export function buildMatriculaMessage(d: MatriculaData): string {
  const linhas = [
    "Olá! Tenho interesse em me matricular na academia.",
    "",
    "*Meus dados:*",
    `- Nome: ${d.nome.trim()}`,
    `- Data de nascimento: ${d.nascimento.trim()}`,
    `- CPF: ${d.cpf.trim()}`,
    `- WhatsApp: ${d.whatsapp.trim()}`,
    `- Plano desejado: ${d.plano}`,
    `- Objetivo: ${d.objetivo}`,
    `- Horário de treino: ${d.horario}`,
  ];
  if (d.observacoes.trim()) {
    linhas.push(`- Observações: ${d.observacoes.trim()}`);
  }
  linhas.push(
    "",
    "Gostaria de receber mais informações para concluir minha matrícula!",
  );
  return linhas.join("\n");
}

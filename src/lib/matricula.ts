export type MatriculaData = {
  nome: string;
  idade: string;
  whatsapp: string;
  plano: string;
  objetivo: string;
  horario: string;
  observacoes: string;
};

export const MATRICULA_INICIAL: MatriculaData = {
  nome: "",
  idade: "",
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

export type MatriculaErrors = Partial<Record<keyof MatriculaData, string>>;

export function validateMatricula(d: MatriculaData): MatriculaErrors {
  const errors: MatriculaErrors = {};

  if (d.nome.trim().length < 3)
    errors.nome = "Informe seu nome completo.";

  const idade = Number(d.idade);
  if (!d.idade.trim()) errors.idade = "Informe sua idade.";
  else if (!Number.isInteger(idade) || idade < 12 || idade > 100)
    errors.idade = "Idade inválida (12 a 100 anos).";

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
  "idade",
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
    `- Idade: ${d.idade.trim()} anos`,
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

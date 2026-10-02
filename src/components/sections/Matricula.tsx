import { useEffect, useMemo, useState } from "react";
import {
  BatteryFull,
  Calendar,
  Check,
  CheckCheck,
  ChevronDown,
  CircleAlert,
  Dumbbell,
  Fingerprint,
  HeartPulse,
  MessageCircle,
  Moon,
  Phone,
  Send,
  Signal,
  Sparkles,
  Sun,
  Sunrise,
  TrendingDown,
  User,
  Wifi,
} from "lucide-react";
import { MATRICULA_PLANOS } from "../../data/site";
import {
  MATRICULA_HORARIOS,
  MATRICULA_INICIAL,
  MATRICULA_OBJETIVOS,
  buildMatriculaMessage,
  maskCpf,
  maskDate,
  maskPhone,
  matriculaProgress,
  validateMatricula,
  type MatriculaData,
  type MatriculaErrors,
} from "../../lib/matricula";
import { whatsappLink } from "../../lib/whatsapp";
import { Red, Section, SectionTitle } from "../ui/Section";

const OBJETIVO_ICONS = [TrendingDown, Dumbbell, HeartPulse, Sparkles];
const HORARIO_ICONS = [Sunrise, Sun, Moon];

const INPUT_CLASS =
  "w-full rounded-[8px] border border-[#2A2A2A] bg-[#181818] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#E60000] focus:ring-2 focus:ring-[#E60000]/40";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white/80"
      >
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF6B6B]">
          <CircleAlert size={14} className="shrink-0" /> {error}
        </p>
      )}
    </div>
  );
}

function MatriculaForm({
  data,
  errors,
  onChange,
  onSubmit,
}: {
  data: MatriculaData;
  errors: MatriculaErrors;
  onChange: (key: keyof MatriculaData, value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-4"
    >
      <Field id="mat-nome" label="Nome completo" error={errors.nome}>
        <div className="relative">
          <User size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            id="mat-nome"
            type="text"
            autoComplete="name"
            placeholder="Ex.: João Silva"
            value={data.nome}
            onChange={(e) => onChange("nome", e.target.value)}
            aria-invalid={!!errors.nome}
            className={`${INPUT_CLASS} pl-10`}
          />
        </div>
      </Field>

      <div className="grid grid-cols-2 gap-3">
        <Field id="mat-nascimento" label="Data de nascimento" error={errors.nascimento}>
          <div className="relative">
            <Calendar size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              id="mat-nascimento"
              type="text"
              inputMode="numeric"
              placeholder="DD/MM/AAAA"
              value={data.nascimento}
              onChange={(e) => onChange("nascimento", maskDate(e.target.value))}
              aria-invalid={!!errors.nascimento}
              className={`${INPUT_CLASS} pl-10`}
            />
          </div>
        </Field>

        <Field id="mat-cpf" label="CPF" error={errors.cpf}>
          <div className="relative">
            <Fingerprint size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              id="mat-cpf"
              type="text"
              inputMode="numeric"
              placeholder="000.000.000-00"
              value={data.cpf}
              onChange={(e) => onChange("cpf", maskCpf(e.target.value))}
              aria-invalid={!!errors.cpf}
              className={`${INPUT_CLASS} pl-10`}
            />
          </div>
        </Field>
      </div>

      <Field id="mat-whatsapp" label="WhatsApp" error={errors.whatsapp}>
        <div className="relative">
          <Phone size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            id="mat-whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(22) 99999-9999"
            value={data.whatsapp}
            onChange={(e) => onChange("whatsapp", maskPhone(e.target.value))}
            aria-invalid={!!errors.whatsapp}
            className={`${INPUT_CLASS} pl-10`}
          />
        </div>
      </Field>

      <Field id="mat-plano" label="Plano desejado" error={errors.plano}>
        <div className="relative">
          <select
            id="mat-plano"
            value={data.plano}
            onChange={(e) => onChange("plano", e.target.value)}
            aria-invalid={!!errors.plano}
            className={`${INPUT_CLASS} appearance-none pr-10 ${data.plano ? "" : "text-white/30"}`}
          >
            <option value="" disabled>
              Selecione um plano
            </option>
            {MATRICULA_PLANOS.map((p) => (
              <option key={p} value={p} className="bg-[#181818] text-white">
                {p}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40" />
        </div>
      </Field>

      <div>
        <span className="mb-1.5 block font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
          Objetivo
        </span>
        <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Objetivo">
          {MATRICULA_OBJETIVOS.map((obj, i) => {
            const Icon = OBJETIVO_ICONS[i];
            const active = data.objetivo === obj;
            return (
              <button
                key={obj}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => onChange("objetivo", active ? "" : obj)}
                className={`flex items-center gap-2 rounded-[8px] border px-3 py-2.5 text-left text-xs font-medium transition-all duration-200 ${
                  active
                    ? "border-[#E60000] bg-[#E60000]/15 text-white shadow-[0_0_18px_rgba(230,0,0,0.3)]"
                    : "border-[#2A2A2A] bg-[#181818] text-white/70 hover:border-white/30"
                }`}
              >
                <Icon size={16} className={active ? "text-[#E60000]" : "text-white/40"} />
                {obj}
              </button>
            );
          })}
        </div>
        {errors.objetivo && (
          <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF6B6B]">
            <CircleAlert size={14} className="shrink-0" /> {errors.objetivo}
          </p>
        )}
      </div>

      <div>
        <span className="mb-1.5 block font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
          Horário de treino
        </span>
        <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Horário de treino">
          {MATRICULA_HORARIOS.map((h, i) => {
            const Icon = HORARIO_ICONS[i];
            const active = data.horario === h;
            return (
              <button
                key={h}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => onChange("horario", active ? "" : h)}
                className={`flex flex-col items-center gap-1 rounded-[8px] border px-2 py-2.5 text-xs font-medium transition-all duration-200 ${
                  active
                    ? "border-[#E60000] bg-[#E60000]/15 text-white shadow-[0_0_18px_rgba(230,0,0,0.3)]"
                    : "border-[#2A2A2A] bg-[#181818] text-white/70 hover:border-white/30"
                }`}
              >
                <Icon size={16} className={active ? "text-[#E60000]" : "text-white/40"} />
                {h}
              </button>
            );
          })}
        </div>
        {errors.horario && (
          <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF6B6B]">
            <CircleAlert size={14} className="shrink-0" /> {errors.horario}
          </p>
        )}
      </div>

      <Field id="mat-obs" label="Observações (opcional)" error={errors.observacoes}>
        <textarea
          id="mat-obs"
          rows={2}
          maxLength={300}
          placeholder="Alguma informação adicional?"
          value={data.observacoes}
          onChange={(e) => onChange("observacoes", e.target.value)}
          aria-invalid={!!errors.observacoes}
          className={`${INPUT_CLASS} resize-none`}
        />
        <p className="mt-1 text-right text-[11px] text-white/30">
          {data.observacoes.trim().length}/300
        </p>
      </Field>

      <button
        type="submit"
        className="btn-shine inline-flex w-full items-center justify-center rounded-[8px] bg-[#E60000] px-[22px] py-[15px] font-display text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#FF0000]"
      >
        Gerar minha matrícula
      </button>
    </form>
  );
}

function MatriculaPreview({
  data,
  onEdit,
}: {
  data: MatriculaData;
  onEdit: () => void;
}) {
  const message = useMemo(() => buildMatriculaMessage(data), [data]);
  const link = useMemo(() => whatsappLink(message), [message]);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[12px] border border-[#2A2A2A]">
        {/* topo da conversa */}
        <div className="flex items-center gap-3 border-b border-[#2A2A2A] bg-[#111111] px-4 py-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E60000]">
            <Dumbbell size={18} className="text-white" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">
              Metamorfose Guarus
            </span>
            <span className="block text-xs text-white/50">online agora</span>
          </span>
        </div>
        {/* bolha da mensagem */}
        <div className="bg-[#0B0B0B] px-4 py-5">
          <div className="ml-auto max-w-full rounded-[12px] rounded-tr-[4px] bg-[#1F2C34] px-4 py-3 shadow-lg">
            <p className="whitespace-pre-wrap text-[13px] leading-relaxed text-white">
              {message}
            </p>
            <span className="mt-1.5 flex items-center justify-end gap-1 text-[11px] text-white/50">
              {new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              <CheckCheck size={16} className="text-[#53bdeb]" />
            </span>
          </div>
        </div>
      </div>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-white/60">
        <Check size={14} className="mt-0.5 shrink-0 text-[#E60000]" />
        Confira os dados acima. Ao continuar, o WhatsApp abre com essa mensagem
        pronta — é só enviar.
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#25D366] px-[22px] py-[15px] font-display text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#1fb857]"
      >
        <MessageCircle size={16} /> Continuar pelo WhatsApp <Send size={14} />
      </a>
      <button
        type="button"
        onClick={onEdit}
        className="inline-flex w-full items-center justify-center rounded-[8px] border border-[#2A2A2A] px-[22px] py-[13px] font-display text-sm font-bold uppercase tracking-wide text-white/80 transition-colors hover:border-[#E60000] hover:text-white"
      >
        Voltar e editar dados
      </button>
    </div>
  );
}

export function Matricula() {
  const [data, setData] = useState<MatriculaData>(MATRICULA_INICIAL);
  const [errors, setErrors] = useState<MatriculaErrors>({});
  const [step, setStep] = useState<"form" | "preview">("form");

  const progress = useMemo(() => matriculaProgress(data), [data]);

  // "Quero esse plano" (seção Planos) pré-seleciona o plano no formulário
  useEffect(() => {
    const handler = (e: Event) => {
      const plano = (e as CustomEvent<string>).detail;
      if (plano && MATRICULA_PLANOS.includes(plano)) {
        setData((d) => ({ ...d, plano }));
        setErrors((prev) => ({ ...prev, plano: undefined }));
      }
    };
    window.addEventListener("matricula-plano", handler);
    return () => window.removeEventListener("matricula-plano", handler);
  }, []);

  const update = (key: keyof MatriculaData, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const gerar = () => {
    const errs = validateMatricula(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const first = Object.keys(errs)[0] as keyof MatriculaData;
      document.getElementById(`mat-${first}`)?.focus();
      return;
    }
    setStep("preview");
  };

  return (
    <Section id="matricula" className="py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* texto lateral */}
        <div className="reveal text-center lg:text-left">
          <SectionTitle eyebrow="Matrícula online">
            Seu próximo nível <Red>começa aqui.</Red>
          </SectionTitle>
          <p className="mt-5 text-[#B8B8B8] leading-relaxed">
            Preencha seus dados e dê o primeiro passo para transformar sua
            rotina.
          </p>
          <ul className="mt-7 space-y-3 text-left">
            {[
              "Leva menos de 1 minuto",
              "Mensagem pronta para o WhatsApp",
              "Sem compromisso",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E60000]/15 border border-[#E60000]/40">
                  <Check size={14} className="text-[#E60000]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-7 hidden font-display text-5xl font-extrabold uppercase leading-none text-white/5 select-none lg:block">
            Matricule-se
          </p>
        </div>

        {/* celular */}
        <div className="reveal mx-auto w-full max-w-[400px]">
          <div className="relative rounded-[3rem] border border-[#2A2A2A] bg-black p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_60px_rgba(230,0,0,0.22)]">
            {/* botões laterais */}
            <span aria-hidden="true" className="absolute -left-[2px] top-24 h-10 w-[3px] rounded-full bg-[#2A2A2A]" />
            <span aria-hidden="true" className="absolute -left-[2px] top-40 h-14 w-[3px] rounded-full bg-[#2A2A2A]" />
            <span aria-hidden="true" className="absolute -right-[2px] top-32 h-16 w-[3px] rounded-full bg-[#2A2A2A]" />

            <div className="overflow-hidden rounded-[2.4rem] bg-[#0B0B0B]">
              {/* dynamic island */}
              <div className="relative bg-black px-6 pb-1 pt-3">
                <div className="mx-auto h-6 w-28 rounded-full bg-black ring-1 ring-[#2A2A2A]" />
                <div className="mt-1.5 flex items-center justify-between text-[11px] font-semibold text-white">
                  <span>
                    {new Date().toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/80">
                    <Signal size={13} />
                    <Wifi size={13} />
                    <BatteryFull size={15} />
                  </span>
                </div>
              </div>

              {/* topo do app */}
              <div className="border-b border-[#2A2A2A] bg-gradient-to-r from-[#B80000] to-[#E60000] px-5 py-4">
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-white/80">
                  Metamorfose Guarus
                </p>
                <h3 className="mt-0.5 font-display text-xl font-extrabold uppercase leading-tight">
                  {step === "form" ? "Fazer matrícula" : "Confira e envie"}
                </h3>
              </div>

              {/* progresso */}
              <div className="border-b border-[#2A2A2A] bg-[#111111] px-5 py-3">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest text-white/60">
                  <span>{step === "form" ? "Seus dados" : "Prévia pronta"}</span>
                  <span className="tabular-nums text-[#E60000]">{progress}%</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#2A2A2A]"
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#B80000] to-[#FF0000] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* conteúdo */}
              <div className="matricula-scroll max-h-[540px] overflow-y-auto px-5 py-5">
                <div key={step} className="anim-fade-up">
                  {step === "form" ? (
                    <MatriculaForm
                      data={data}
                      errors={errors}
                      onChange={update}
                      onSubmit={gerar}
                    />
                  ) : (
                    <MatriculaPreview data={data} onEdit={() => setStep("form")} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

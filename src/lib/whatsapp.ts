import { WHATSAPP_BASE } from "../data/site";

export function whatsappLink(mensagem: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(mensagem)}`;
}

export const WA_MESSAGES = {
  header: "Olá! Vim pelo site da Academia Metamorfose Guarus e quero começar a treinar.",
  hero: "Olá! Quero dar o primeiro passo e começar meu treino na Metamorfose Guarus.",
  conheca: "Olá! Gostaria de conhecer a estrutura da Academia Metamorfose Guarus.",
  menuMobile: "Olá! Quero treinar na Academia Metamorfose Guarus. Pode me passar as informações?",
  instagram: "Olá! Vi o Instagram de vocês e quero saber mais sobre a Academia Metamorfose Guarus.",
  comoChegar: "Olá! Quero visitar a Academia Metamorfose Guarus. Pode me passar a rota?",
  faleConosco: "Olá! Gostaria de falar com a Academia Metamorfose Guarus.",
  ctaFinal: "Olá! Minha transformação começa hoje. Quero começar!",
  flutuante: "Olá! Gostaria de saber mais informações sobre a Academia Metamorfose Guarus.",
  transformacao: "Olá! Quero começar minha transformação na Academia Metamorfose Guarus.",
  plano: (nome: string) =>
    `Olá! Tenho interesse no plano ${nome} da Academia Metamorfose Guarus.`,
};

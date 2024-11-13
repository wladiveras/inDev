import { componentNames } from "./../../.nuxt/components.d"
export const navigationMenu = ref([
  [
    {
      slot: "logo",
    },
    {
      label: "Sobre",
      icon: "i-lucide-book-open",
      active: true,
    },
    {
      label: "Experiência",
      icon: "i-lucide-book-open",
    },
    {
      label: "Projetos",
      icon: "i-lucide-book-open",

      children: [
        {
          label: "Projeto 1",
          description: "Descrição.",
          icon: "i-lucide-house",
        },
        {
          label: "Projeto 2",
          description: "Descrição.",
          icon: "i-lucide-house",
        },
        {
          label: "Projeto 3",
          description: "Descrição.",
          icon: "i-lucide-house",
        },
        {
          label: "Projeto 4",
          description: "Descrição.",
          icon: "i-lucide-house",
        },
      ],
    },
  ],
  [
    {
      slot: "resume",
      disabled: false,
    },
  ],
])

import type { Avatar, TabItem } from '#ui/types'

export type UserStatus = 'subscribed' | 'unsubscribed' | 'bounced'

interface ContentItem {
    text: string
}
export interface CustomTabItem extends TabItem {
    icon: string
    title: string
    label: string
    date: string
    url?: string
    content: ContentItem[]
}

export interface Hero {
    image: string
    label: string
    title: string
    subtitle: string
    about: string
    description: string
}

export interface ColorTheme {
    label: string
    icon?: string
    slot: string
    class: string
    color: string
    onSelect: () => void
}
export interface Logo {
    width?: number | string
    height?: number | string
    color?: string
    opacity?: number
    preserveAspectRatio?: string
    className?: string
}

export interface NavigationMenuItem {
    label?: string
    icon?: string
    slot?: string
    active?: boolean
    href?: string
    disabled?: boolean
}

export interface Project {
    title: string
    description: string
    github?: string
    preview?: string
    technologies: string[]
}

export interface User {
    id: number
    name: string
    email: string
    avatar?: Avatar
    status: UserStatus
    location: string
}

export interface Mail {
    id: number
    unread?: boolean
    from: User
    subject: string
    body: string
    date: string
}

export interface Member {
    name: string
    username: string
    role: 'member' | 'owner'
    avatar: Avatar
}

export interface Notification {
    id: number
    unread?: boolean
    sender: User
    body: string
    date: string
}

export type Period = 'daily' | 'weekly' | 'monthly'

export interface Range {
    start: Date
    end: Date
}

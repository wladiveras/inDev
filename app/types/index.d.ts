import type { Avatar } from '#ui/types'

export type UserStatus = 'subscribed' | 'unsubscribed' | 'bounced'

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
    to?: string
    children?: NavigationMenuItem[]
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

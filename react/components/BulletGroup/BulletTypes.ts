export type BulletProps = {
  src: string
  titleBullet: string
  link: LinkProps
}

export type BulletsSchema = Array<{
  image: string
  titleBullet: string
  link: LinkProps
}>

export interface LinkProps {
  url: string
  attributeNofollow?: boolean
  attributeTitle?: string
  apenNewTab?: boolean
  newTab?: boolean
}

import React from 'react'
import Bullet from '../Bullet';
import { BulletsSchema } from '../BulletTypes';


export const getBulletsAsTSXList = (
  bullets: BulletsSchema
  ) => (
  bullets.map((bullet: any, index) => {

    return <Bullet
      key={index}
      src={bullet.image}
      titleBullet={bullet.titleBullet}
      link={
        bullet.link
          ?
          bullet.link
          :
          {
            url: "",
            attributeNofollow: false,
            attributeTitle: "",
            apenNewTab: false,
            newTab: false
          }
      }

    />
  })
)


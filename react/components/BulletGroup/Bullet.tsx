import React from 'react';
import { Link } from 'vtex.render-runtime';
import { BulletProps } from './BulletTypes';
import { useCssHandles } from 'vtex.css-handles';
import "./styles.css"


const Bullet = ({ src, titleBullet, link }: BulletProps) => {
  const CSS_HANDLES = [
    "bullet__item",
    "bullet__item--title",
    "bullet__item--image",
    "bullet__item--link"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.bullet__item}>
      <Link
        to={link.url}
        className={handles["bullet__item--link"]}
      >
        <p
          className={handles["bullet__item--title"]}
        >
          {titleBullet}
        </p>
        <img
          className={handles["bullet__item--image"]}
          src={src}
          alt={titleBullet}
        />

      </Link>
    </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "Imagen Bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}
export default Bullet

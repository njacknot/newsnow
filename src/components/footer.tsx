import { Author, Homepage } from "@shared/consts"

export function Footer() {
  return (
    <>
      <span>
        <span>NewsNow © 2024 By </span>
        <a href={Author.url} target="_blank">
          {Author.name}
        </a>
      </span>
    </>
  )
}

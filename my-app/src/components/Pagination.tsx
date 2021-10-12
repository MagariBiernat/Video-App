import React, { useEffect, useState } from "react"
import { Pagination as Pagin, PaginationItem, PaginationLink } from "reactstrap"

interface IProps {
  moviesLength: number
  pageNumber: number
  setPageNumber: (arg: number) => void
}

const Pagination: React.FC<IProps> = ({
  moviesLength,
  setPageNumber,
  pageNumber,
}) => {
  const [maxPage, setMaxPage] = useState<number>(0)

  useEffect(() => {
    setMaxPage(Math.ceil(moviesLength / 6))
  }, [moviesLength])

  const pages = Array.from(Array(maxPage).keys())
  return (
    <Pagin>
      {pages.map((x: number, i) => (
        <PaginationItem
          style={{ padding: "20px" }}
          active={pageNumber === x + 1 ? true : false}
          onClick={() => setPageNumber(x + 1)}
        >
          <PaginationLink>{x + 1}</PaginationLink>
        </PaginationItem>
      ))}
    </Pagin>
  )
}

export default Pagination

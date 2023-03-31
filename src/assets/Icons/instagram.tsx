import { Color } from '@/utils/color'

export const Instagram = ({
  size,
  color = Color.WHITE,
}: {
  size: number
  color?: string
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Instagram</title>
      <path
        d="M12.5026 2.08325C15.3328 2.08325 15.6859 2.09367 16.7964 2.14575C17.9057 2.19784 18.6609 2.37179 19.3255 2.63013C20.013 2.89471 20.5922 3.25304 21.1714 3.83117C21.701 4.35189 22.1109 4.98178 22.3724 5.677C22.6297 6.34054 22.8047 7.09679 22.8568 8.20617C22.9057 9.31659 22.9193 9.66971 22.9193 12.4999C22.9193 15.3301 22.9089 15.6833 22.8568 16.7937C22.8047 17.903 22.6297 18.6583 22.3724 19.3228C22.1116 20.0184 21.7017 20.6485 21.1714 21.1687C20.6505 21.6982 20.0206 22.108 19.3255 22.3697C18.662 22.627 17.9057 22.802 16.7964 22.8541C15.6859 22.903 15.3328 22.9166 12.5026 22.9166C9.6724 22.9166 9.31927 22.9062 8.20885 22.8541C7.09948 22.802 6.34427 22.627 5.67969 22.3697C4.98419 22.1087 4.3542 21.6988 3.83385 21.1687C3.30407 20.648 2.8942 20.0181 2.63281 19.3228C2.37448 18.6593 2.20052 17.903 2.14844 16.7937C2.09948 15.6833 2.08594 15.3301 2.08594 12.4999C2.08594 9.66971 2.09635 9.31659 2.14844 8.20617C2.20052 7.09575 2.37448 6.34159 2.63281 5.677C2.89348 4.98136 3.30344 4.35129 3.83385 3.83117C4.35434 3.3012 4.9843 2.8913 5.67969 2.63013C6.34427 2.37179 7.09844 2.19784 8.20885 2.14575C9.31927 2.09679 9.6724 2.08325 12.5026 2.08325ZM12.5026 7.29159C11.1213 7.29159 9.79651 7.84032 8.81976 8.81707C7.843 9.79382 7.29427 11.1186 7.29427 12.4999C7.29427 13.8813 7.843 15.206 8.81976 16.1828C9.79651 17.1595 11.1213 17.7083 12.5026 17.7083C13.8839 17.7083 15.2087 17.1595 16.1855 16.1828C17.1622 15.206 17.7109 13.8813 17.7109 12.4999C17.7109 11.1186 17.1622 9.79382 16.1855 8.81707C15.2087 7.84032 13.8839 7.29159 12.5026 7.29159ZM19.2734 7.03117C19.2734 6.68583 19.1363 6.35464 18.8921 6.11046C18.6479 5.86627 18.3167 5.72909 17.9714 5.72909C17.626 5.72909 17.2948 5.86627 17.0506 6.11046C16.8065 6.35464 16.6693 6.68583 16.6693 7.03117C16.6693 7.3765 16.8065 7.70769 17.0506 7.95188C17.2948 8.19607 17.626 8.33325 17.9714 8.33325C18.3167 8.33325 18.6479 8.19607 18.8921 7.95188C19.1363 7.70769 19.2734 7.3765 19.2734 7.03117ZM12.5026 9.37492C13.3314 9.37492 14.1263 9.70416 14.7123 10.2902C15.2984 10.8763 15.6276 11.6711 15.6276 12.4999C15.6276 13.3287 15.2984 14.1236 14.7123 14.7096C14.1263 15.2957 13.3314 15.6249 12.5026 15.6249C11.6738 15.6249 10.8789 15.2957 10.2929 14.7096C9.70684 14.1236 9.3776 13.3287 9.3776 12.4999C9.3776 11.6711 9.70684 10.8763 10.2929 10.2902C10.8789 9.70416 11.6738 9.37492 12.5026 9.37492Z"
        fill={color}
      />
    </svg>
  )
}

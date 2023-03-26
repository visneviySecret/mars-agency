export const CheckArrow = ({
  size,
  color,
}: {
  size?: number
  color: string
}) => {
  return (
    <svg
      width={size || 14}
      height={size || 14}
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>checkbox arrow</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 0.702843L4.7828 10L0 5.17571L0.696799 4.47287L4.7828 8.59431L13.3032 0L14 0.702843Z"
        fill={color}
      />
    </svg>
  )
}

// DIVIDER CLASS
// Dividing line shown on mobile/small breakpoints only.
// Line is hidden on md and above, but spacing is preserved.

export default function HorizontalDivider() {
    return (
      <hr className="md:hidden w-[80%] mx-auto"/>
    )
}
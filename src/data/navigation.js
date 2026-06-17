// Navigation model. Section ids match the in-page anchors used for hash nav.
export const navItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// Ids the scroll-spy observes (stable reference for the hook dependency).
export const sectionIds = navItems.map((item) => item.id)

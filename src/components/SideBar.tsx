import "../styles/sidebar.scss";

interface SidebarProps {
  title: string
  subtitle: string
  component: any;
}

export function SideBar(props: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>{props.title}<p>{props.subtitle}</p></span>
      <div className="buttons-container">
        {props.component}
      </div>
    </nav>
  )
}
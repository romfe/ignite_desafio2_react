import { Button } from './Button';
import '../styles/sidebar.scss';

interface Props {
  genres:
  {
    id: number,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family',
    title: string,
  }[],
  selectedId: number,
  onHandleClickButton(arg: number): void
}


export function SideBar(props: Props) {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onHandleClickButton(parseInt(e.currentTarget.name));
  }
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={handleClick}
            selected={props.selectedId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
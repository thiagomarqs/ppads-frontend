import { Outlet } from 'react-router-dom';
import defaultStyles from '../../../../styles/default.module.scss'

interface Props extends React.PropsWithChildren<any>{
  titulo: string;
}

export default function DefaultAdminContent(props: Props) {
  return (
    <div className='container'>
      <div className={'container ' + defaultStyles['content']}>

        <div className={'container ' + defaultStyles['header']}>
          <h2>{props.titulo}</h2>
          <hr />
        </div>

        <div className='container '>
          {props.children}
        </div>

      </div>
    </div>
  )
}
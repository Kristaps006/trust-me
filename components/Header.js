import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Kris</span>is nailing this 
      </h1>
      
      <p className={headerStyles.par}>
        bellow you find Star wars fact
      </p>
    </div>
  )
}

export default Header
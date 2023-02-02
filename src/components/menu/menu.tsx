import { ROUTE } from "../../router";
import { Border, LinksWrapper, MenuItem, MenuLink, MenuTitle, MenuWrapper } from "./styles";


export const Menu = () => (
   <MenuWrapper>
     <ul>
        <MenuTitle>Витрина книг</MenuTitle>
        <Border />
        <MenuItem>Все книги</MenuItem>
        <MenuItem>Бизнес-книги</MenuItem>
        <MenuItem>Детективы</MenuItem>
        <MenuItem>Детские книги</MenuItem>
        <MenuItem>Зарубежная литература</MenuItem>
        <MenuItem>История</MenuItem>
        <MenuItem>Классическая литература</MenuItem>
        <MenuItem>Книги по психологии</MenuItem>
        <MenuItem>Компьютерная литература</MenuItem>
        <MenuItem>Культура и искусство</MenuItem>
        <MenuItem>Наука и образование</MenuItem>
        <MenuItem>Публицистическая литература</MenuItem>
        <MenuItem>Справочники</MenuItem>
        <MenuItem>Фантастика</MenuItem>
        <MenuItem>Юмористическая литература</MenuItem>
     </ul>
     <LinksWrapper>
      <MenuLink to={ROUTE.TERMS}>Правила пользования</MenuLink>
      <MenuLink to={ROUTE.OFFER}>Договор оферты</MenuLink>
    </LinksWrapper>
    
    </MenuWrapper>
);
import{r as i,a4 as s,a as o,M as n,j as a,S as d,a7 as l,T as c,G as u}from"./index-389414f7.js";import{J as m}from"./index-494ad39c.js";import{L as p,S as g}from"./LoadingButton-5d5e42f8.js";import"./OutlinedInput-53b26ca1.js";import"./InputAdornment-05ef3388.js";import"./MinusOutlined-a03e1f6d.js";import"./Select-7f3fe165.js";const L=()=>{const[e,r]=i.useState(!1),t=s();return o(n,{title:"Creación de cargo",returnButton:!0,children:[a(d,{spacing:.75,sx:{my:1},children:a(l,{"aria-label":"breadcrumb",children:a(c,{variant:"h6",children:"Completa la siguiente información de tu cargo y asocia un assessment para que los candidatos puedan ser evaluados por tu equipo."})})}),a("br",{}),a(m,{children:a(u,{item:!0,xs:12,md:12,children:a(p,{type:"submit",disableElevation:!0,disabled:e,fullWidth:!0,size:"large",variant:"contained",color:"primary",onClick:()=>{r(!0),setTimeout(()=>{t("/cargos")},2e3)},loading:e,loadingPosition:"start",startIcon:a(g,{}),children:"Agregar"})})})]})};export{L as default};

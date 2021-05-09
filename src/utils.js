/* eslint-disable array-callback-return */
const Mes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const Meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
export const formatChosenDate = (date,tipe) => {
    if (date !== null && date !== undefined) {
      const calendar = new Date(date);
      const month = calendar.getMonth();
      if(tipe){
        return (`${calendar.getDate()} de ${Mes[month]}`);
      }else{
        return (`${calendar.getDate()} de ${Meses[month]}`);
      }
      
    }
    return ('');
  }

  export const getTime = (hora1) => {
    if (hora1 !== null && hora1 !== undefined) {
      let hora = hora1.slice(11, 13) - 5;
      const minuto = hora1.slice(14, 16);
      let ampm = 'a.m.';
      hora = parseInt(hora.toString(), 10);
      if (hora < 0) {
        hora += 12;
        ampm = 'p.m.';
      } else if (hora === 12) {
        ampm = 'p.m.';
      } else if ((hora - 12) > 0) {
        hora -= 12;
        ampm = 'p.m.';
      } else if (hora === 0) {
        hora = 12;
      }
      const horaString = hora.toString();
      const result = `${horaString}:${minuto} ${ampm}`;
      return (result);
    }
    return ('-');
  }

  export const capitalizarPalabras= ( data ) => {
    if (data !== null && data !== undefined) {
      const copia = data;
      let palabra = '';
      let result = '';
      const arr = copia.split(' ');
      arr.map((elem) => {
        if (elem.charAt(1) !== '.') {
          palabra = (elem.charAt(0)).toUpperCase() + (elem.slice(1)).toLowerCase();
        } else {
          palabra = elem;
        }
        result = `${result + palabra} `;
      });
      return (result);
    }
}
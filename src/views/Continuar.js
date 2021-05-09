import React from 'react';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { Header } from '../components/Header';
import { Step2 } from '../components/Step2';
import { Card2 } from '../components/Card2';

import '../styles/continuar.css';

export const Continuar = (props) => {
  return (
    <div className="home">
      <Header />
      <div className="medio">
        <Step2 className="progress" />
        <div className="div-content">
          <div className="saludo">
            <div className="icon-back-father">
              <div className="icon-back1">
                <ArrowBackIos style={{ fontSize: '13px', fontWeight: '100', paddingLeft: '3px' }}></ArrowBackIos>
              </div>
              <p className="text-volver"> VOLVER</p>
            </div>
            <p className="text_saludo1"> Mira las coberturas</p>
            <p className="text_saludo2"> Conoce las coberturas para tu plan</p>
          </div>
          <div className="card2">
            <Card2/>
          </div>
        </div>
        <div className="card-help">
              <CardHelp />
            </div>
            <div className="continuar">
             <button className= "button-continuar"
              >LO QUIERO </button>
          </div>
      </div>             
    </div>
  );
};

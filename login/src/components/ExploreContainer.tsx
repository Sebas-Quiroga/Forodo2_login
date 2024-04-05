import React, { useState } from 'react';
import { IonContent, IonInput, IonButton } from '@ionic/react';

import './ExploreContainer.css';
import buttonImage from './google.png';

function Example() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí podrías implementar la lógica de autenticación
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <IonContent className="ion-padding">
      <div className="login-container">
        <h1>Iniciar Sesión</h1>
        <IonInput
          className="input-field"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value)}
        />
        <IonInput
          className="input-field"
          type="password"
          placeholder="Contraseña"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value)}
        />
        <IonButton onClick={handleLogin}>Iniciar Sesión</IonButton>
        <IonButton onClick={handleLogin}>
          <img src={buttonImage} alt="Botón de Imagen" className="button-image" />
          Iniciar con Google
        </IonButton>
      </div>
    </IonContent>
  );
}

export default Example;

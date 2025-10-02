import React from 'react';
import GamesNav from './GamesNav';

export default function GamesScreenWrapper({ route }) {
  const { usuario } = route.params;

  return <GamesNav usuario={usuario} />;
}

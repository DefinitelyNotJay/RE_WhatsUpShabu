// MyIconComponent.jsx
import React from 'react';
import { Camera } from 'lucide-react';

const MyIcon = ({ Icon, size = 24, color = "black" }) => {
  return <Icon size={size} color={color} />;
};

export default MyIcon;

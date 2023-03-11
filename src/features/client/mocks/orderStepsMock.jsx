import { GiCook } from 'react-icons/gi';
import { TiTick } from 'react-icons/ti';
import { IoFastFoodSharp, IoStar } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';

export const steps = [
  {
    label: 'Accepted',
    message: 'Your order has been accepted! Nr. 12983123789.',
    icon: <TiTick style={{ width: '100%', height: '100%' }} />,
  },
  {
    label: 'Preparing',
    message: 'Your order is being prepared.',
    icon: <GiCook style={{ width: '100%', height: '100%' }} />,
  },
  {
    label: 'Ready',
    message: 'Your order is ready. A courier will pick it up soon.',
    icon: <IoFastFoodSharp style={{ width: '100%', height: '100%' }} />,
  },
  {
    label: 'Delivering',
    message: 'Your order is out for delivery.',
    icon: <TbTruckDelivery style={{ width: '100%', height: '100%' }} />,
  },
  {
    label: 'Completed',
    message: 'Order has been delivered. Enjoy your meal!',
    icon: <IoStar style={{ width: '100%', height: '100%' }} />,
  },
];

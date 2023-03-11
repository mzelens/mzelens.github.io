import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useMediaQuery,
} from '@chakra-ui/react';
import './index.scss';
import { Button } from '@chakra-ui/react';

function SubscriptionPlans() {
  const tick =
    'https://www.lekste.lt/dist/img/static/marketing/check-primary.svg?1645630781731v1';
  const dash = <span className="table-item__dash">-</span>;

  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <div className="restaurant-signup__container">
      <TableContainer
        width={
          isSmallerThan768 ? '100vw' : isSmallerThan1200 ? '720px' : '1040px'
        }
        m="0 auto"
        border="1px"
        borderColor="gray.200"
        borderRadius="50"
      >
        <Table
          variant="simple"
          colorScheme="purple"
          size={isSmallerThan1200 ? 'sm' : 'md'}
        >
          <TableCaption>Subscription plans</TableCaption>
          <Thead>
            <Tr>
              <Th></Th>
              <Th id="inApp" textAlign="center">
                sell through <br />
                <span>www.bfd.lt/</span>
              </Th>
              <Th id="webshop" textAlign="center">
                your personal <br />
                <span>webshop</span>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td className="table-item">
                Extra orders through https://bfd.lt/
              </Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
              <Td className="table-item">{dash}</Td>
            </Tr>
            <Tr>
              <Td className="table-item">Dedicated, customized webshop</Td>
              <Td className="table-item">{dash}</Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
            </Tr>
            <Tr>
              <Td className="table-item">Quick & easy setup</Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
            </Tr>
            <Tr>
              <Td className="table-item">Access to own dashboard</Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
            </Tr>
            <Tr>
              <Td className="table-item">Upload and edit menus online</Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
            </Tr>
            <Tr>
              <Td className="table-item">Online payments</Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
            </Tr>
            <Tr>
              <Td className="table-item">bfd.lt delivery service</Td>
              <Td className="table-item">{dash}</Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
            </Tr>
            <Tr>
              <Td className="table-item">Delivery with own couriers</Td>
              <Td className="table-item">{dash}</Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
            </Tr>
            <Tr>
              <Td className="table-item">Offer customer pick-up</Td>
              <Td className="table-item">{dash}</Td>
              <Td className="table-item">
                <img src={tick} alt="tick" />
              </Td>
            </Tr>
            <Tr>
              <Td className="table-subheader">Pricing</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td className="table-item">- bfd.lt delivery</Td>
              <Td className="table-item">30%</Td>
              <Td className="table-item">20%</Td>
            </Tr>
            <Tr>
              <Td className="table-item">- Own delivery</Td>
              <Td className="table-item">14%</Td>
              <Td className="table-item">0%</Td>
            </Tr>
            <Tr>
              <Td className="table-item">- Customer pick-up</Td>
              <Td className="table-item">14%</Td>
              <Td className="table-item">0%</Td>
            </Tr>
            <Tr>
              <Td className="table-subheader">Sign up</Td>
              <Td className="table-item">149 Eur</Td>
              <Td className="table-item">199 Eur</Td>
            </Tr>
            <Tr>
              <Td className="table-subheader">Subscription</Td>
              <Td className="table-item">0 Eur/month</Td>
              <Td className="table-item">49 Eur/month</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td className="table-item">
                <Button size="lg" whiteSpace="normal" colorScheme="teal">
                  Sign up for bfd.lt
                </Button>
              </Td>
              <Td className="table-item">
                <Button
                  size="lg"
                  width="180px"
                  whiteSpace="normal"
                  colorScheme="teal"
                >
                  Sign up for a webshop demo
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SubscriptionPlans;

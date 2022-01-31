import { ReactElement } from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.sizes.medium}px;
  padding: ${({ theme }) => theme.space.xlarge}px;

  transition: ${({ theme }) => theme.transitions.boxShadowCubic};
  box-shadow: ${({ theme }) => theme.shadows.card};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.soft};
  }
`;

const Card = (): ReactElement => {
  const { watch, control } = useFormContext();
  const { isValid } = useFormState({ control });
  const [rate, numberOfPeriods, paymentAmount, presentValue, endOrBeginning] =
    watch([
      'rate',
      'numberOfPeriods',
      'paymentAmount',
      'presentValue',
      'endOrBeginning',
    ]);

  return (
    <StyledCard>
      {JSON.stringify({
        rate,
        numberOfPeriods,
        paymentAmount,
        presentValue,
        endOrBeginning,
      })}
      <br />
      <br />
      <div>
        <button disabled={!isValid}>Calculate / Tính</button>
      </div>
    </StyledCard>
  );
};

export default Card;

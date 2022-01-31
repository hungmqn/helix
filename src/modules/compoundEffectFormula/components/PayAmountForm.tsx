import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from 'react-hook-form';

import Result from './Result';
import Card from '../../../shared/Card';
import Input from '../../../shared/Form/Input';
import Switcher from '../../../shared/Form/Switcher';

type Inputs = {
  futureValue: Number;
  rate: Number;
  numberOfPeriods: Number;
  paymentAmount: Number;
  presentValue?: Number;
  endOrBeginning?: Number;
};

/**
 *
 * The FV function calculates the future value of an annuity investment based on constant-amount periodic payments and a constant interest rate.
 * FV(rate, number_of_periods, payment_amount, [present_value], [end_or_beginning])
 * rate - The interest rate.
 * number_of_periods - The number of payments to be made.
 * payment_amount - The amount per period to be paid.
 * present_value - [ OPTIONAL - 0 by default ] - The current value of the annuity.
 * end_or_beginning - [ OPTIONAL - 0 by default ] - Whether payments are due at the end (0) or beginning (1) of each period.
 *
 * FV=PV*(1+i)^n
 */

const Form = () => {
  const payAmountForm = useForm<Inputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Card>
      <FormProvider {...payAmountForm}>
        <form onSubmit={payAmountForm.handleSubmit(onSubmit)}>
          <Input
            defaultValue={0}
            register={payAmountForm.register}
            name="rate"
            type="number"
            label="Rate (r) / Lãi suất (%):"
            validate={{ required: true }}
            errors={payAmountForm.formState.errors}
          />
          <Input
            defaultValue={0}
            register={payAmountForm.register}
            name="numberOfPeriods"
            type="number"
            label="Number of Periods (n) / Số kỳ (ngày/tháng/năm ví dụ lãi theo tháng trong 2 năm = 24 kỳ):"
            validate={{ required: 'Number of Periods is required' }}
            errors={payAmountForm.formState.errors}
          />
          <Input
            defaultValue={0}
            register={payAmountForm.register}
            name="paymentAmount"
            type="number"
            label="Payment Amount (i) / Số tiền đầu tư mỗi kỳ:"
            validate={{ required: 'Payment Amount is required' }}
            errors={payAmountForm.formState.errors}
          />
          <Input
            defaultValue={0}
            register={payAmountForm.register}
            name="presentValue"
            type="number"
            label="Present Value (PV) / Số tiền đã đầu tư:"
          />
          <Controller
            name="endOrBeginning"
            control={payAmountForm.control}
            defaultValue={0.0}
            render={({ field }) => (
              <Switcher
                {...field}
                type="number"
                label="End or Beginning / Trả tiền đầu hay cuối kỳ:"
              />
            )}
          />
          <br />
          <Result />
        </form>
      </FormProvider>
    </Card>
  );
};

export default Form;

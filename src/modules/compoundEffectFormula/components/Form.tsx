import React, { useMemo } from 'react';
import { useForm, SubmitHandler, useFormState } from 'react-hook-form';

import Card from '../../../shared/Card';
import Input from '../../../shared/Form/Input';

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
  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });
  const { isValid } = useFormState({ control });

  const [rate, numberOfPeriods, paymentAmount, presentValue] = watch([
    'rate',
    'numberOfPeriods',
    'paymentAmount',
    'presentValue',
  ]);

  const calculate = () => {
    if (isValid) {
      const formValues = getValues();
      Object.keys(formValues).forEach(
        (key) =>
          (formValues[key as keyof typeof formValues] = Number(
            formValues[key as keyof typeof formValues]
          ))
      );

      const { rate, numberOfPeriods, paymentAmount, presentValue } = formValues;
      const futureValue =
        (presentValue as any) *
        Math.pow(
          1 + ((paymentAmount as any) * (rate as any)) / 100,
          numberOfPeriods as any
        );
      console.log(futureValue);
    }
  };

  const futureValue = useMemo(() => {
    let result = 0.0;
    if (isValid) {
      result = ((presentValue as any) *
        Math.pow(
          1 + ((paymentAmount as any) * (rate as any)) / 100,
          numberOfPeriods as any
        )) as any;
    }
    const formatter = new Intl.NumberFormat('vn-VN', {
      style: 'currency',
      currency: 'VND',
    });
    return formatter.format(result);
  }, [isValid, rate, numberOfPeriods, paymentAmount, presentValue]);

  const onSubmit: SubmitHandler<Inputs> = calculate;

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          defaultValue={0}
          register={register}
          name="rate"
          type="number"
          label="Rate (r) / Lãi suất (%):"
          validate={{ required: true }}
          errors={errors}
        />
        <Input
          defaultValue={0}
          register={register}
          name="numberOfPeriods"
          type="number"
          label="Number of Periods (n) / Số kỳ (ngày/tháng/năm ví dụ lãi theo tháng trong 2 năm = 24 kỳ):"
          validate={{ required: 'Number of Periods is required' }}
          errors={errors}
        />
        <Input
          defaultValue={0}
          register={register}
          name="paymentAmount"
          type="number"
          label="Payment Amount (i) / Số tiền đầu tư mỗi kỳ:"
          validate={{ required: 'Payment Amount is required' }}
          errors={errors}
        />
        <Input
          defaultValue={0}
          register={register}
          name="presentValue"
          type="number"
          label="Present Value (PV) / Số tiền đã đầu tư:"
        />
        {/* <Input
          defaultValue={0}
          register={register}
          name="endOrBeginning"
          type="number"
          label="End or Beginning / Trả tiền đầu hay cuối kỳ:"
        /> */}
        <br />
        Future value / Kết quả: {futureValue}
        <br />
        <br />
        <div>
          <button disabled={!isValid}>Calculate / Tính</button>
        </div>
      </form>
    </Card>
  );
};

export default Form;

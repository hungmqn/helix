import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin: ${({ theme }) => theme.space.large}px 0;

  .helix-form-label {
    flex-basis: 200px;
    margin-right: ${({ theme }) => theme.space.medium}px;
  }
  .helix-form-input {
    flex: 1;
  }
  .helix-form-input > input {
    width: 100%;
    border: none;
    background: none;
    padding: ${({ theme }) => theme.space.small}px;
    color: ${({ theme }) => theme.colors.primaryText};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    transition: ${({ theme }) => theme.transitions.boxShadowCubic};

    &:focus {
      outline: none;
    }
    &:hover {
      outline: none;
    }
  }

  .helix-form-input > input[type='number'] {
    -moz-appearance: textfield;
  }
  .helix-form-input > input[type='number']::-webkit-inner-spin-button,
  .helix-form-input > input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .helix-form-input > .helix-form-error-inline {
    color: ${({ theme }) => theme.colors.dangerText};
  }
`;

interface InputProps {
  name: string;
  label: string;
  type?: string;
  validate?: any;
  errors?: any;
}

const Switcher = forwardRef(
  ({ name, label, errors, ...fieldProps }: InputProps, fowardedRef) => {
    return (
      <StyledInput>
        <div className="helix-form-label">{label}</div>
        <div className="helix-form-input">
          <input {...fieldProps} />
          {errors
            ? errors[name] && (
                <span className="helix-form-error-inline">
                  {errors[name].message}
                </span>
              )
            : ''}
        </div>
      </StyledInput>
    );
  }
);

export default Switcher;

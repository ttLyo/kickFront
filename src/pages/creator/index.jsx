import React, {useEffect, useState} from 'react';
import {Button, Card, Steps} from 'antd';
import Step1 from './children/Step1';
import Step2 from './children/Step2';
import Step3 from './children/Step3';
import styles from './style.less';

const {Step} = Steps;

const getCurrentStepAndComponent = current => {
  switch (current) {
    case 'confirm':
      return <Step2/>;

    case 'result':
      return {
        step: 2,
        component: <Step3/>,
      };

    case 'info':
    default:
      return {
        step: 0,
        component: <Step1/>,
      };
  }
};

const switchStep = currentStep => {
  switch (currentStep) {
    case 0:
      return <Step1/>;
    case 1:
      return <Step2/>;
    case 2:
      return <Step3/>;
  }
};


const Creator = ({current}) => {
  const [stepComponent, setStepComponent] = useState(<Step1/>);
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    const {step, component} = getCurrentStepAndComponent(current);
    setCurrentStep(step);
    setStepComponent(component);
  }, [current]);

  const next = currentStep => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
      <div style={{display:"flex", justifyContent:"center"}}>
    <Card bordered={false} style={{width:"800px"}}>
    <div  style={{height:"5em"}}></div>
      <Steps style={{marginBottom:"48px"}} current={currentStep} onChange={current => setCurrentStep(current)} className={styles.steps}>
        <Step title="填写项目信息"/>
        <Step title="填写背景故事"/>
        <Step title="附件上传"/>
      </Steps>
      {switchStep(currentStep)}
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '3em'}}>
        {currentStep === 2 ? <Button onClick={() => alert('提交成功')} type="primary">提交</Button> :
          <Button onClick={() => next(currentStep)} type="primary">下一步</Button>}
      </div>
    </Card>
    </div>
  );
};

export default Creator
;

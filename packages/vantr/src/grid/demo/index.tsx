import * as React from 'react';
import { Row, Col } from 'vantr';
import './index.less';

const Block: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <div className='demo-grid-title'>{title}</div>
      <div className='demo-grid-block'>{children}</div>
    </>
  );
};

export default () => {
  return (
    <div className='demo-grid'>
      <Block title='基础用法'>
        <Row>
          <Col span={8}>span: 8</Col>
          <Col span={8}>span: 8</Col>
          <Col span={8}>span: 8</Col>
        </Row>
        <Row>
          <Col span={4}>span: 4</Col>
          <Col span={10} offset={4}>
            offset: 4, span: 10
          </Col>
        </Row>
        <Row>
          <Col offset={12} span={12}>
            offset: 12, span: 12
          </Col>
        </Row>
      </Block>
      <Block title='设置列元素间距'>
        <Row gutter={20}>
          <Col span={8}>span: 8</Col>
          <Col span={8}>span: 8</Col>
          <Col span={8}>span: 8</Col>
        </Row>
      </Block>
      <Block title='对齐方式'>
        <Row justify='center'>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
        </Row>
        <Row justify='end'>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
        </Row>
        <Row justify='space-between'>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
        </Row>
        <Row justify='space-around'>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
        </Row>
      </Block>
    </div>
  );
};

import React from "react";
import Step from "./Step";
import { Row, Col, Radio } from 'antd'

const Question = props => {
    
    return (
        <Row className='row-question justify-start xl:ms-[200px]'>
            <Col>
                <Row className="content">
                    <Col>
                        <Step number={(props.currentIndexQuestion + 1)} />
                    </Col>
                    <Col>
                        <p className='text-lg'>{props.arrayQuestions[props.currentIndexQuestion].content}</p>

                    </Col>

                </Row>
                <Row className='options m-4'>
                    <Radio.Group
                        value={Object.values(props.answers)[props.currentIndexQuestion]?.answer ?? ""}
                        className='text-lg'
                        style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                    >
                        <Radio.Button
                            type='primary'
                            value={true}
                            onClick={() => props.handleAnswerClick(props.arrayQuestions[props.currentIndexQuestion].category, true)}>
                            Sim
                        </Radio.Button>
                        <Radio.Button
                            type='primary'
                            value={false}
                            onClick={() => props.handleAnswerClick(props.arrayQuestions[props.currentIndexQuestion].category, false)}>
                            Não
                        </Radio.Button>
                    </Radio.Group>
                </Row>
            </Col>
        </Row>
    )
}
export default Question;
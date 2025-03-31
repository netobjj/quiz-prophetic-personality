import React, { useState } from 'react';
import Step from './Step';

import { Row, Col, Button, Radio } from 'antd';
import { LeftOutlined, RightOutlined, } from '@ant-design/icons';

const objQuestions = [{
    content: 'Você tende a imaginar como as coisas deveriam ser em uma situação?',
    category: "knower",
    answerCorrect: true,
    id: 6,
}, {
    content: 'Você é guiado muitas vezes por alguma intuição?',
    category: "knower",
    answerCorrect: true,
    id: 1,
}, {
    content: 'Você acha fácil ultrapassar barreiras e superar obstáculos?',
    category: "knower",
    answerCorrect: true,
    id: 12,
}, {
    content: 'Você tende a ter pensamentos inspirados interrompendo seus próprios pensamentos?',
    category: "knower",
    answerCorrect: true,
    id: 15,
}, {
    content: 'Você tem habilidade em discernir o fim que terá algo que está acontecendo?',
    category: "knower",
    answerCorrect: true,
    id: 18,
}, {
    content: 'Você é frequentemente conhecido por ser "muito sensível" ou "muito emotivo"?',
    category: "feeler",
    answerCorrect: true,
    id: 2,
}, {
    content: 'Você tem dificuldade em agir quando você sente que as coisas não estão certas?',
    category: "feeler",
    answerCorrect: true,
    id: 8,
}, {
    content: 'Você sente de forma forte o que está acontecendo na atmosfera quando entra em algum lugar?',
    category: "feeler",
    answerCorrect: true,
    id: 10,
}, {
    content: 'Você facilmente chora ao ler a bíblia?',
    category: "feeler",
    answerCorrect: true,
    id: 13,
}, {
    content: 'Você sente muito a dor do seu próximo, ora muito e chora também quando coisas ruins estão acontecendo?',
    category: "feeler",
    answerCorrect: true,
    id: 20,
}, {
    content: 'Há uma voz interior forte que te guia?',
    category: "hearer",
    answerCorrect: true,
    id: 3,
}, {
    content: 'Muitas vezes já aconteceu de você ir fazer algo e de repente um pensamento te faz mudar?',
    category: "hearer",
    answerCorrect: true,
    id: 7,
}, {
    content: 'Você aprende muito escutando os outros falarem?',
    category: "hearer",
    answerCorrect: true,
    id: 11,
}, {
    content: 'Você tem dificuldade para se concentrar nos detalhes?',
    category: "hearer",
    answerCorrect: true,
    id: 14,
}, {
    content: 'Você tende a gostar de trabalhar sozinho(a)?',
    category: "hearer",
    answerCorrect: true,
    id: 17,
}, {
    content: 'Você vê imagens com clareza do que Deus irá fazer?',
    category: "seer",
    answerCorrect: true,
    id: 4,
}, {
    content: 'Você tem dificuldade em se relacionar com pessoas que não veem da mesma maneira que você vê as coisas?',
    category: "seer",
    answerCorrect: true,
    id: 5,
}, {
    content: 'Você tem a tendência a ter grandes sonhos?',
    category: "seer",
    answerCorrect: true,
    id: 9,
}, {
    content: 'Você tem dificuldades em esperar seus sonhos acontecerem?',
    category: "seer",
    answerCorrect: false,
    id: 16,
}, {
    content: 'Você tende a ter uma fé e confiança inabaláveis?',
    category: "seer",
    answerCorrect: true,
    id: 19,
}];

objQuestions = objQuestions.map((q, index) => {
    q.i = index;
    return q;
});

const MainHome = props => {
    const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);
    const [questions, setQuestions] = useState(objQuestions);

    const handleNextQuestion = (valuePrevious) => {


        if (currentIndexQuestion < questions.length - 1) {
            questions[currentIndexQuestion].responseUser = valuePrevious;

            setCurrentIndexQuestion((prev) => prev + 1);
        }
    };

    const handlePreviousQuestion = () => {
        questions[currentIndexQuestion].responseUser = valuePrevious;

        if (currentIndexQuestion > 0) {
            setCurrentIndexQuestion((prev) => prev - 1);
        }
    };

    return (
        <>
            <h1 className='text-3xl'>Quiz - Personalidade Profética</h1>
            <br />

            <Row className='question justify-center'>
                <Col>
                    <Row className="content">
                        <Col>
                            <Step number={(questions[currentIndexQuestion].i + 1)} />
                        </Col>
                        <Col>
                            <p className='text-lg'>{questions[currentIndexQuestion].content}</p>

                        </Col>

                    </Row>
                    <Row className='options m-4'>
                        <Radio.Group className='text-lg' style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                            options={[
                                { value: true, label: "Sim" },
                                { value: false, label: "Não" }
                            ]}
                            onChange={(value) => handleNextQuestion(value)}
                        />
                    </Row>

                </Col>
            </Row>




            <Row className='justify-items-center justify-center mt-10'>
                <Col>
                    <Button className='m-4' type='primary' icon={<LeftOutlined />} >
                        Anterior
                    </Button>
                </Col>
                <Col>
                    <Button className='m-4' type='primary' icon={<RightOutlined />}>
                        Próxima
                    </Button>
                </Col>
            </Row>

        </>
    );


}

export default MainHome;
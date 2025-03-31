import React, { useState } from 'react';
import { Row, Col, Button, Radio } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Step from './Step';

const MainHome = () => {
    const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    function sortQuestions(a, b) {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    }
    let questions = [{
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
        content: 'Você tem facilidade em esperar seus sonhos acontecerem?',
        category: "seer",
        answerCorrect: true,
        id: 16,
    }, {
        content: 'Você tende a ter uma fé e confiança inabaláveis?',
        category: "seer",
        answerCorrect: true,
        id: 19,
    }];

    questions = questions.sort(sortQuestions);

    const handleAnswerClick = (category, answer) => {
        setAnswers(prev => ({
            ...prev,
            [currentIndexQuestion]: { category, answer }
        }));

        // Avançar automaticamente para a próxima pergunta, se houver
        if (currentIndexQuestion < questions.length - 1) {
            setCurrentIndexQuestion(prev => prev + 1);
        }
        console.log(answers)
        if (Object.values(answers).length >= 19) setShowResults(true);
    };

    const getMostFrequentCategory = () => {
        let arr = [{
            count: 0,
            value: "O que sabe",
        }, {
            count: 0,
            value: "O que sente",
        }, {
            count: 0,
            value: "O que ouve",
        }, {
            count: 0,
            value: "O que ver",
        }];

        Object.values(answers).forEach(({ category, answer }) => {
            if (category === 'knower' && answer === true) arr[0].count++;
            if (category === 'feeler' && answer === true) arr[1].count++;
            if (category === 'hearer' && answer === true) arr[2].count++;
            if (category === 'seer' && answer === true) arr[3].count++;
        });

        function compare(a, b) {
            if (a.count < b.count) {
                return 1;
            }
            if (a.count > b.count) {
                return -1;
            }
            return 0;
        }

        arr.sort(compare);
        console.log(arr)
        return arr[0].value;

    };

    return (
        <>
            <h1 className='text-3xl'>Quiz - Personalidade Profética</h1>
            <br />

            {!showResults ? (
                <Row className='question justify-start xl:ms-[200px]'>
                    <Col>
                        <Row className="content">
                            <Col>
                                <Step number={(currentIndexQuestion + 1)} />
                            </Col>
                            <Col>
                                <p className='text-lg'>{questions[currentIndexQuestion].content}</p>

                            </Col>

                        </Row>
                        <Row className='options m-4'>
                            <Radio.Group
                                defaultValue={''}
                                className='text-lg'
                                style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                            >
                                <Radio.Button
                                    type='primary'
                                    value={true}
                                    onClick={() => handleAnswerClick(questions[currentIndexQuestion].category, true)}>
                                    Sim
                                </Radio.Button>
                                <Radio.Button
                                    type='primary'
                                    value={false}
                                    onClick={() => handleAnswerClick(questions[currentIndexQuestion].category, false)}>
                                    Não
                                </Radio.Button>
                            </Radio.Group>
                        </Row>
                    </Col>
                </Row>
            ) : (
                <Row className='result justify-center'>
                    <Col>
                        <h2 className='text-2xl'>Seu perfil mais dominante é:</h2>
                        <p className='text-5xl font-bold'>{getMostFrequentCategory()}</p>
                    </Col>
                </Row>
            )}

            {!showResults && (
                <Row className='justify-items-center justify-center mt-10'>
                    <Col>
                        <Button className='m-4' type='primary' icon={<LeftOutlined />}
                            onClick={() => setCurrentIndexQuestion(prev => Math.max(0, prev - 1))}
                            disabled={currentIndexQuestion === 0}>
                            Anterior
                        </Button>
                    </Col>
                    <Col>
                        <Button className='m-4' type='primary' icon={<RightOutlined />}
                            onClick={() => setCurrentIndexQuestion(prev => prev + 1)}
                            disabled={!answers[currentIndexQuestion] || currentIndexQuestion === questions.length - 1}>
                            Próxima
                        </Button>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default MainHome;

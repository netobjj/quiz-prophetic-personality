import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import Question from './Question';

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
    let arrayQuestions = [{
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

    arrayQuestions = arrayQuestions.sort(sortQuestions);

    

    const handleAnswerClick = (category, answer) => {
        
        setTimeout(() => {
            setAnswers(prev => ({
                ...prev,
                [currentIndexQuestion]: { category, answer }
            }));

            // Avançar automaticamente para a próxima pergunta, se houver
            if (currentIndexQuestion < arrayQuestions.length - 1) {
                setCurrentIndexQuestion(prev => prev + 1);
            }
            //if (!!answers) console.log(Object.values(answers).findIndex((val, index) => index === currentIndexQuestion))
            if (Object.values(answers).length >= 19) setShowResults(true);
        }, 10);



    };

    const getMostFrequentCategory = () => {
        let arr = [{
            count: 0,
            categoryPtBr: "O que sabe",
        }, {
            count: 0,
            categoryPtBr: "O que sente",
        }, {
            count: 0,
            categoryPtBr: "O que ouve",
        }, {
            count: 0,
            categoryPtBr: "O que ver",
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
        return arr;

    };

    //let listResults = (arr) => arr.map(value, index => <p className='text-5xl font-bold'>value</p>

    return (
        <>
            <h1 className='text-3xl'>Quiz - Personalidade Profética</h1>
            <br />

            {!showResults ? (
                <Question
                    currentIndexQuestion={currentIndexQuestion}
                    arrayQuestions={arrayQuestions}
                    handleAnswerClick={handleAnswerClick}
                    answers={answers}
                />
            ) : (
                <Row className='result justify-center'>
                    <Col>
                        <h2 className='text-2xl bg-green-600 rounded-2xl text-white ps-4 pe-4'>Seu perfil mais dominante é:</h2>
                        <p className='text-5xl font-bold'>{getMostFrequentCategory()[0].categoryPtBr}</p>
                        <br/>
                        <br/>
                        <h2 className='text-2xl bg-green-600 rounded-2xl text-white'>Suas porcentagens:</h2>
                        {getMostFrequentCategory().map((v, index) => <p className='text-2xl'>{v.categoryPtBr.concat(": ", (v.count/5)*100, "%" )}</p>) }
                        
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
                            disabled={!answers[currentIndexQuestion] || currentIndexQuestion === arrayQuestions.length - 1}>
                            Próxima
                        </Button>
                    </Col>
                </Row>
            )}

        </>
    );
};

export default MainHome;

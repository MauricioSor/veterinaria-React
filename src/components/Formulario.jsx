import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Cards from './Cards';

const Formulario = () => {
    const peliculasLocalStorage = JSON.parse(localStorage.getItem('listapeliculas')) || [];
    const [pelicula, setPelicula] = useState('');
    const [peliculas, setPeliculas] = useState(peliculasLocalStorage);

    useEffect(() => {
        localStorage.setItem('listapeliculas', JSON.stringify(peliculas));
    }, [peliculas]);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        setPeliculas([...peliculas, pelicula]);
        setPelicula('');
        setValidated(true);
    };

    const handlePeliculaChange = (event) => {
        setPelicula(event.target.value);
    };


    return (
        <div className="container text-light">
            <h1 className='text-center'>Administrador de turnos</h1>
            <hr />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nombre de Mascota</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Pancho"
                            value={pelicula}
                            onChange={handlePeliculaChange}
                        />
                        <Form.Control.Feedback>El nombre es válido!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Complete este campo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Nombre de Dueño</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Marcos"
                        />
                        <Form.Control.Feedback>El nombre es válido!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Complete este campo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="01/06/2023"
                        />
                        <Form.Control.Feedback>La fecha es válida!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Complete este campo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Hora</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="16:00 hs"
                        />
                        <Form.Control.Feedback>Horario Valido!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Complete este campo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Sintomas</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Vomitos, Diarrea, sangrado etc."
                        />
                        <Form.Control.Feedback>Campo válido!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Complete este campo</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Enviar</Button>
            </Form>
            <h1 className='text-center mt-5'>Turnos</h1>
            <hr />
            <Cards peliculas={peliculas} className='my-4' />
        </div>
    );
};

export default Formulario;

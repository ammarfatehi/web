import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function CourseworkPage(props){

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <h1>Fall 2019:</h1>
                <p><h6>Intro to Electrical Engineering:</h6> The scope and nature of professional activities of electrical engineers,including problem-solving techniques; analysis and design methods; engineering professional ethics; analysis of analog resistive circuits, including Thevenin/Norton equivalents, mesh analysis, and nodal analysis; and operational amplifiers (DC response). Substantial teamworkis required for laboratory work in this course.</p>
                <p><h6>Intro to Computing:</h6> Motivated, bottom-up introduction to computing; bits and operations on bits; number formats; arithmetic and logic operations; digital logic; the Von Neumann model of processing, including memory, arithmetic logic unit, registers, and instruction decoding and execution; introduction tostructured programming and debugging; machine and assembly language programming; the structure of an assembler; physical input/output through device registers; subroutine call/return; trap instruction; stacks and applications of stacks.</p>
                <p><h6>Sequences, Series/Multi-variable Calculus:</h6> The theory and applications of sequences and infinite series, including those involving functions of one variable, and an introduction to the theory and applications of differential and integral calculus of functions of several variables; subjects include methods of integration, parametric equations, sequences, infinite series, power series, functions of several variables, partial derivatives, and multiple integrals. </p>
                <h1>Spring 2020:</h1>
                <p><h6>Intro to Embedded Systems: </h6> Embedded systems; machine language execution; assembly and C language programming; local variables and subroutines; input/output synchronization; analog to digital conversion and digital to analog conversion; debugging; and interrupts. </p>
                <p><h6>Discrete Math: </h6> Provides a transition from the problem-solving approach of Mathematics Multi-variable Calculus to the rigorous approach of advanced courses. Subjects include logic, set theory, relations and functions, combinatorics, and graph theory and graph algorithms.</p>
                <p><h6>Differential Equations: </h6>Ordinary differential equations, introduction to vector spaces, linear operators and eigenvalues, systems of linear differential equations, introduction to partial differential equations and Fourier series. </p>
                <p><h6>Linear Algebra: </h6>Techniques of matrix calculations and applications of linear algebra. </p>
                <p><h6>Intro to Accounting:</h6>An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. </p>
                <h1>Fall 2020:</h1>
                <p><h6>Software Design and Implementation I:</h6> Basic problem solving, design and implementation techniques for imperative programming; structured programming in the C/C++ language; programming idioms; introduction to software design principles, including modularity, coupling and cohesion; introduction to software engineering tools; elementary data structures; asymptotic analysis.</p>
                <p><h6>Circuit Theory: </h6> Capacitance and inductance; first- and second-order transient circuit response, including operational amplifier circuits; sinusoidal steady state analysis; Bode plots; complex power in single and balanced three-phase systems; transformers; two-port networks (Z-parameters and Y-parameters); and computer-aided analysis and design. </p>
                <p><h6>Probability and Random Processes: </h6>Probability, random variables, statistics, and random processes, including counting, independence, conditioning, expectation, density functions, distributions, law of large numbers, central limit theorem, confidence intervals, hypothesis testing, statistical estimation, stationary processes, Markov chains, and ergodicity. </p>
                <p><h6>Engineering Communication: </h6> Professional communication skills for engineers, with emphasis on research, writing, and oral presentation on topics of social and technical significance in engineering.</p>

            </Content>
        </div>
    );
}

export default CourseworkPage;
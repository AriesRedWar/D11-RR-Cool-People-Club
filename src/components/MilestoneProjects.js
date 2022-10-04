import Carousel from 'react-bootstrap/Carousel'

export default function MilestoneProjects() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='/Philips Milestone project.png'
                    alt="Snake game"
                />
                <Carousel.Caption>
                    <h3>Snake-Eat More Dots by Philip</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='/tara1.jpeg'
                    alt="Trivia Game"
                />

                <Carousel.Caption>
                    <h3>Let's Play: Trivia by Shetara</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/hotsprings.jpg"
                    alt="Live life"
                />

            </Carousel.Item>
        </Carousel>
    );
}

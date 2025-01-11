import { Container, Content, Grid, Row, Col, Button, Panel } from 'rsuite';
import { motion } from 'framer-motion';
import MessageIcon from '@rsuite/icons/Message';
import ImageIcon from '@rsuite/icons/Image';
import { useNavigate } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={styles.overviewSection}>
            <Container>
                <Content style={styles.content}>
                    <h2 style={styles.headline}>Découvrez Nos Fonctionnalités</h2>
                    <p style={styles.description}>
                        Cette application propose des outils avancés pour améliorer votre expérience. 
                        Essayez notre <b>Chatbot IA</b> pour des interactions intelligentes ou 
                        générez des images avec <b>notre Générateur d'Images AI</b>.
                    </p>

                    <Grid fluid>
                        <Row gutter={16} justify="center">
                            {/* Chatbot Card */}
                            <Col xs={24} sm={12}>
                                <motion.div 
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <Panel shaded bordered bodyFill style={styles.featureCard}>
                                        <MessageIcon style={styles.icon} />
                                        <h4 style={styles.featureTitle}>Chatbot AI</h4>
                                        <p style={styles.featureDescription}>
                                            Discutez avec un chatbot intelligent et obtenez des réponses précises en temps réel.
                                        </p>
                                        <Button appearance="primary" block onClick={() => navigate('/chat-bot')}>
                                            Accéder au Chatbot
                                        </Button>
                                    </Panel>
                                </motion.div>
                            </Col>

                            {/* Image Generator Card */}
                            <Col xs={24} sm={12}>
                                <motion.div 
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Panel shaded bordered bodyFill style={styles.featureCard}>
                                        <ImageIcon style={styles.icon} />
                                        <h4 style={styles.featureTitle}>Générateur d'Images AI</h4>
                                        <p style={styles.featureDescription}>
                                            Créez des images uniques à partir de descriptions textuelles grâce à l'IA.
                                        </p>
                                        <Button appearance="primary" block onClick={() => navigate('/image-generator')}>
                                            Accéder au Générateur
                                        </Button>
                                    </Panel>
                                </motion.div>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        </div>
    );
}

export default HomePage;

const styles = {
    overviewSection: {
        padding: '50px 20px',
        textAlign: 'center',
    },
    content: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    headline: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    description: {
        fontSize: '1.2rem',
        marginBottom: '40px',
    },
    featureCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        padding: '20px',
        textAlign: 'center',
        marginBottom: '30px',
    },
    icon: {
        fontSize: '3rem',
        marginBottom: '10px',
    },
    featureTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    featureDescription: {
        fontSize: '1rem',
        marginBottom: '10px',
    },
};

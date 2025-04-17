import React from 'react';
import PropTypes from 'prop-types';

const MentalHealthCards = () => {
    return (
        <div className="flex flex-wrap gap-8 p-4">
            <MentalHealthCard
                title="Understanding Depression: Navigating the Depths of Despair"
                image="/images/depression-img.jpg"
                description="Depression is a common mental disorder characterized by persistent sadness and loss of interest. Symptoms include fatigue, changes in appetite, feelings of worthlessness, and difficulty concentrating. Causes range from biological factors to life events and personal circumstances. Treatment often involves psychotherapy (like CBT) and medications (SSRIs, SNRIs). Awareness has grown significantly, with campaigns promoting understanding and reducing stigma around this treatable condition."
                helpLink="https://www.nimh.nih.gov/health/topics/depression"
            />

            <MentalHealthCard
                title="Facing Anxiety: Strategies for Overcoming Daily Worries"
                image="/images/anxiety-img.jpg"
                description="Anxiety disorders involve excessive fear or worry that interferes with daily activities. Symptoms include restlessness, rapid heartbeat, difficulty sleeping, and panic attacks. Causes may include genetics, brain chemistry, personality, and life events. Treatments include therapy (especially CBT), medications (like SSRIs or benzodiazepines), and lifestyle changes. Recent awareness efforts emphasize that anxiety is more than normal worry and deserves proper treatment."
                helpLink="https://www.nimh.nih.gov/health/topics/anxiety-disorders"
            />

            <MentalHealthCard
                title="Living with OCD: Managing Obsessions and Compulsions"
                image="/images/ocd-img.jpg"
                description="Obsessive-Compulsive Disorder (OCD) features unwanted thoughts (obsessions) and repetitive behaviors (compulsions). Symptoms include excessive cleaning, checking, counting, or needing things orderly. Causes involve genetic and neurological factors. Treatment typically combines psychotherapy (especially Exposure Therapy) and medications (like SSRIs). Awareness campaigns highlight that OCD is more than being tidy - it's a serious condition that can be debilitating without treatment."
                helpLink="https://iocdf.org/about-ocd/"
            />

            <MentalHealthCard
                title="Exploring Schizophrenia: Insights into a Complex Disorder"
                image="/images/schizophrenia-img.jpg"
                description="Schizophrenia is a severe mental disorder affecting how a person thinks, feels, and behaves. Symptoms include hallucinations, delusions, disorganized thinking, and reduced emotional expression. Causes involve genetic, brain chemistry, and environmental factors. Treatment includes antipsychotic medications and psychosocial therapies. Awareness initiatives combat myths, emphasizing that with proper treatment, many with schizophrenia can lead productive lives."
                helpLink="https://www.nimh.nih.gov/health/topics/schizophrenia"
            />

            <MentalHealthCard
                title="Understanding Autism: Embracing Neurodiversity"
                image="/images/autism-img.jpg"
                description="Autism Spectrum Disorder (ASD) is a developmental condition affecting communication and behavior. Symptoms include social challenges, repetitive behaviors, and unique strengths. Causes are primarily genetic with environmental factors. While no medication treats core symptoms, therapies (like ABA) help develop skills. Awareness has shifted to focus on neurodiversity - recognizing autistic individuals have different rather than deficient ways of experiencing the world."
                helpLink="https://www.autismspeaks.org/what-autism"
            />

            <MentalHealthCard
                title="Confronting Panic Disorder: Paths to Recovery and Calm"
                image="/images/panic-img.jpg"
                description="Panic Disorder involves recurrent, unexpected panic attacks - sudden periods of intense fear. Symptoms include palpitations, sweating, trembling, and fear of losing control. Causes may include genetics, major stress, or temperament. Treatment combines therapy (especially CBT) and medications (like SSRIs or SNRIs). Awareness efforts educate that panic attacks are medical events, not signs of weakness, and effective treatments are available."
                helpLink="https://www.anxiety.org/what-is-panic-disorder"
            />
        </div>
    );
};

const MentalHealthCard = ({ title, image, description, helpLink }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
            <div className="relative w-1/4 h-[110%] flex-shrink-0 ">
                <img
                    className="object-cover w-full h-full"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="p-6 flex flex-col justify-between ">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <p className="mt-4 text-gray-600">{description}</p>
                </div>
                {helpLink && (
                    <a
                        href={helpLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-center bg-gradient-to-r from-[#36247e] to-[#7b3476] p-2 hover:bg-black hover:from-black text rounded transition-all"
                    >
                        Learn more
                    </a>
                )}
            </div>
        </div>
    );
};

MentalHealthCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    helpLink: PropTypes.string, // Optional
};


export default MentalHealthCards;


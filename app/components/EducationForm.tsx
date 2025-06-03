import { Education } from '@/type';
import { Plus } from 'lucide-react';
import React from 'react'

type Props = {
    educations: Education[];
    setEducations: (education: Education[]) => void
}

const EducationForm: React.FC<Props> = ({ educations, setEducations }) => {

    const [newEducation, setNewEducation] = React.useState<Education>({
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
        description: ''
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement |
        HTMLTextAreaElement>, field: keyof Education) => {
        setNewEducation({
            ...newEducation,
            [field]: e.target.value
        });
    }

    const handleAddEducation = () => {
        setEducations([...educations, newEducation]);
        setNewEducation(
            {
                degree: '',
                school: '',
                startDate: '',
                endDate: '',
                description: ''
            }
        );
    }

    return (
        <div>
            <div className='flex flex-col gap-4'>

                <div className='flex justify-between'>
                    <input
                        type="text"
                        placeholder="Nom de l'ecole"
                        value={newEducation.school}
                        className='input input-bordered w-full '
                        onChange={(e) => handleChange(e, 'school')}
                    />
                    <input
                        type="text"
                        placeholder="Diplome"
                        value={newEducation.degree}
                        className='input input-bordered w-full ml-4'
                        onChange={(e) => handleChange(e, 'degree')}
                    />

                </div>

                <div className='flex justify-between'>
                    <input
                        type="text"
                        placeholder='Date de debut'
                        onFocus={(e) => e.target.type = 'Date'}
                        onBlur={(e) => e.target.type = 'Text'}
                        value={newEducation.startDate}
                        className='input input-bordered w-full'
                        onChange={(e) => handleChange(e, 'startDate')}
                    />
                    <input
                        type="text"
                        placeholder="Date de fin"
                        onFocus={(e) => e.target.type = 'Date'}
                        onBlur={(e) => e.target.type = 'Text'}
                        value={newEducation.endDate}
                        className='input input-bordered w-full ml-4'
                        onChange={(e) => handleChange(e, 'endDate')}
                    />
                </div>

                <textarea
                    placeholder='Description'
                    value={newEducation.description}
                    className='input input-bordered w-full'
                    onChange={(e) => handleChange(e, 'description')}
                ></textarea>
            </div>

            <button className='btn btn-primary mt-4' onClick={handleAddEducation}>
                Ajouter
                <Plus className='w-4' />

            </button>

        </div>
    )
}

export default EducationForm

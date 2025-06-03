import { Skill } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

type Props = {
    skills: Skill[];
    setSkills: (skills: Skill[]) => void
}

const SkillForm: React.FC<Props> = ({ skills, setSkills }) => {


    const [newSkill, setNewSkill] = useState<Skill>({
        name: '',
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement |
        HTMLSelectElement>, field: keyof Skill) => {
        setNewSkill({
            ...newSkill,
            [field]: e.target.value
        });
    }

    const handleAddSkill = () => {
        setSkills([...skills, newSkill]);
        setNewSkill(
            {
                name: '',
            }
        );
    }

    return (
        <div>
            <div className='mt-4 '>
                <input
                    type="text"
                    placeholder="Competences"
                    value={newSkill.name}
                    className='input input-bordered w-full '
                    onChange={(e) => handleChange(e, 'name')}
                />
            </div>

            <button className='btn btn-primary mt-4' onClick={handleAddSkill}>
                Ajouter
                <Plus className='w-4' />

            </button>
        </div>
    )
}

export default SkillForm

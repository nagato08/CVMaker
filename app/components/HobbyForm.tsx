import { Hobby } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

type Props = {
    hobbies: Hobby[];
    setHobbies: (hobbies: Hobby[]) => void
}

const HobbyForm: React.FC<Props> = ({ hobbies, setHobbies }) => {

    const [newHobby, setNewHobby] = useState<Hobby>({
        name: '',
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement |
        HTMLSelectElement>, field: keyof Hobby) => {
        setNewHobby({
            ...newHobby,
            [field]: e.target.value
        });
    }

    const handleAddHobby = () => {
        setHobbies([...hobbies, newHobby]);
        setNewHobby(
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
                    placeholder="Loisirs"
                    value={newHobby.name}
                    className='input input-bordered w-full '
                    onChange={(e) => handleChange(e, 'name')}
                />
            </div>

            <button className='btn btn-primary mt-4' onClick={handleAddHobby}>
                Ajouter
                <Plus className='w-4' />

            </button>
        </div>
    )
}

export default HobbyForm

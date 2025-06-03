import { Language } from '@/type';
import { Plus } from 'lucide-react';
import React from 'react'

type Props = {
    languages: Language[];
    setLanguages: (language: Language[]) => void
}

const LanguageForm: React.FC<Props> = ({ languages, setLanguages }) => {

    const [newLanguage, setNewLanguage] = React.useState<Language>({
        language: '',
        proficiency: ''
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement |
        HTMLSelectElement>, field: keyof Language) => {
        setNewLanguage({
            ...newLanguage,
            [field]: e.target.value
        });
    }

    const handleAddLanguage = () => {
        setLanguages([...languages, newLanguage]);
        setNewLanguage(
            {
                language: '',
                proficiency: ''
            }
        );
    }
    return (
        <div className='space-y-4'>
            <input
                type="text"
                placeholder="Langue"
                value={newLanguage.language}
                className='input input-bordered w-full '
                onChange={(e) => handleChange(e, 'language')}
            />
            <select
                name=""
                id=""
                value={newLanguage.proficiency}
                onChange={(e) => handleChange(e, 'proficiency')}
                className='select select-bordered w-full'
            >
               <option value="">Sélectionner la maîtrise</option>
                <option value="Débutant">Débutant</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Avancé">Avancé</option>


            </select>

            <button className='btn btn-primary mt-4' onClick={handleAddLanguage}>
                Ajouter
                <Plus className='w-4' />

            </button>

        </div>
    )
}

export default LanguageForm

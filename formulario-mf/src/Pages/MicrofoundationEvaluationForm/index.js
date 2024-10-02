import React, { useState } from 'react';
import { XCircle } from 'lucide-react';

const MicrofoundationEvaluationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    profile: '',
    course: '',
    microfoundation: '',
    question1: '',
    question1Text: '',
    question2: '',
    question2Text: '',
    question3: '',
    question3Text: '',
    question4: '',
    question4Text: '',
    question5: '',
    question5Text: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Formulário Avaliação MF</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Perfil obrigatório:</label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="profile"
                value="professor"
                checked={formData.profile === 'professor'}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2">Professor de Projeto</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                name="profile"
                value="elaborador"
                checked={formData.profile === 'elaborador'}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2">Elaborador de questão</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">Curso:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="">Selecione um curso</option>
            <option value="ADS">ADS</option>
            <option value="SI">SI</option>
            <option value="Redes">Redes</option>
          </select>
        </div>

        <div>
          <label htmlFor="microfoundation" className="block text-sm font-medium text-gray-700">MF:</label>
          <select
            id="microfoundation"
            name="microfoundation"
            value={formData.microfoundation}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="">Selecione um microfundamento</option>
            <option value="MF1">Microfundamento 1</option>
            <option value="MF2">Microfundamento 2</option>
            <option value="MF3">Microfundamento 3</option>
          </select>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold mb-4">Avaliação</h2>
          
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="mb-6">
              <p className="font-medium mb-2">
                {num}. {getQuestionText(num)}
              </p>
              <div className="flex items-center space-x-4 mb-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label key={rating} className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`question${num}`}
                      value={rating}
                      checked={formData[`question${num}`] === rating.toString()}
                      onChange={handleInputChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2">{rating}</span>
                  </label>
                ))}
              </div>
              <textarea
                name={`question${num}Text`}
                value={formData[`question${num}Text`]}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="3"
                placeholder="Comentários adicionais..."
              ></textarea>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Enviar Avaliação
          </button>
        </div>
      </form>
    </div>
  );
};

const getQuestionText = (num) => {
  switch (num) {
    case 1:
      return "O conteúdo do microfundamento cobre ementa proposta? O que você sugere ajustar?";
    case 2:
      return "O microfundamento é abordado de forma clara e objetiva?";
    case 3:
      return "O conteúdo do MF atende a necessidade do Projeto? O que você sugere ajustar?";
    case 4:
      return "Em algum momento você sinalizou a necessidade de mudança ao coordenador/professor do microfundamento no conteúdo para atender o projeto?";
    case 5:
      return "O microfundamento cobre com profundidade os conceitos descritos na última portaria do Enade? (Válido para Redes, SI e ADS)";
    default:
      return "";
  }
};

export default MicrofoundationEvaluationForm;
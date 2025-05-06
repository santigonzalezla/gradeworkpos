import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from '@/app/components/shared/genericform/genericform.module.css';

const GenericForm = () =>
{
    const initFormData = () =>
    {
        const initialFormData: Record<string, any> = {};
        if (columns && columns.length > 0) {
            columns.forEach(column => {
                initialFormData[column.key] = initialData[column.key] || '';
            });
        }
        return initialFormData;
    };

    const [formData, setFormData] = useState<Record<string, any>>(initFormData);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    useEffect(() =>
    {
        const newFormData: Record<string, any> = {};

        if (columns && columns.length > 0)
        {
            columns.forEach(column => {
                // Preserva los valores actuales si existen
                newFormData[column.key] = initialData[column.key] || formData[column.key] || '';
            });

            // Compara si realmente hay cambios antes de actualizar el estado
            const hasChanges = Object.keys(newFormData).some(
                key => formData[key] !== newFormData[key]
            );

            if (hasChanges) setFormData(newFormData);
        }
    }, [JSON.stringify(initialData), JSON.stringify(columns.map(c => c.key))]);


    const handleChange = (key: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                setFormData(prev => ({
                    ...prev,
                    image: file
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: FormEvent) =>
    {
        e.preventDefault();
        onSubmit(formData);
    };

    // Renderizar un campo según su tipo
    const renderField = (column: Column) =>
    {
        const { key } = column;
        const fieldType = inputConfig.fieldTypes[key] || 'text';
        const label = inputConfig.labelTranslations[key] || key;
        const placeholder = inputConfig.placeholderTranslations[key] || `Ingrese ${key}`;
        const value = formData[key] || '';

        switch (fieldType)
        {
            case 'select':
                return (
                    <div className={styles.formGroup} key={key}>
                        <label htmlFor={key}>{label}:</label>
                        <select
                            id={key}
                            value={value}
                            onChange={(e) => handleChange(key, e.target.value)}
                            className={styles.formControl}
                        >
                            <option value="">{placeholder}</option>
                            {inputConfig.selectOptions[key]?.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            case 'number':
                return (
                    <div className={styles.formGroup} key={key}>
                        <label htmlFor={key}>{label}:</label>
                        <input
                            type="number"
                            id={key}
                            value={value}
                            onChange={(e) => handleChange(key, e.target.value)}
                            placeholder={placeholder}
                            className={styles.formControl}
                        />
                    </div>
                );
            case 'date':
                return (
                    <div className={styles.formGroup} key={key}>
                        <label htmlFor={key}>{label}:</label>
                        <input
                            type="date"
                            id={key}
                            value={value}
                            onChange={(e) => handleChange(key, e.target.value)}
                            className={styles.formControl}
                        />
                    </div>
                );
            default:
                return (
                    <div className={styles.formGroup} key={key}>
                        <label htmlFor={key}>{label}:</label>
                        <input
                            type="text"
                            id={key}
                            value={value}
                            onChange={(e) => handleChange(key, e.target.value)}
                            placeholder={placeholder}
                            className={styles.formControl}
                        />
                    </div>
                );
        }
    };

    return (
        <div className={styles.productFormContainer}>
            <h2 className={styles.formTitle}>Nuevo Producto</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles.imageUploadContainer}>
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="Vista previa"
                            className={styles.imagePreview}
                        />
                    ) : (
                        <div className={styles.imagePlaceholder}>
                            <p>Drag image here<br />or</p>
                            <button
                                type="button"
                                className={styles.browseButton}
                                onClick={() => document.getElementById('productImage')?.click()}
                            >
                                Browse image
                            </button>
                        </div>
                    )}
                    <input
                        type="file"
                        id="productImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className={styles.hiddenInput}
                    />
                </div>

                <div className={styles.formFields}>
                    {columns.map(column => renderField(column))}
                </div>

                <div className={styles.formActions}>
                    <button
                        type="button"
                        onClick={onClose}
                        className={styles.cancelButton}
                    >
                        Descartar
                    </button>
                    <button
                        type="submit"
                        className={styles.submitButton}
                    >
                        Añadir
                    </button>
                </div>
            </form>
        </div>
    );
}

export default GenericForm;
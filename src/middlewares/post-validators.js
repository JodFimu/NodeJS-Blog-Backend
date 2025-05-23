import {body, param} from 'express-validator';
import { validateField } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import {deleteFileOnError} from "./delete-file-on-error.js";

export const postValidator = [
    body('title').notEmpty().withMessage('Title is required').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
    body('description').notEmpty().withMessage('Description is required').isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
    body('category').notEmpty().withMessage('Category is required').isIn(['Proyecto', 'Infografia', 'Documento', 'otro']).withMessage('Category must be one of the following: Proyecto, Infografia, Documento, otro'),
    body('course').notEmpty().withMessage('Course is required').isIn(['Tecnologia', 'Practica Supervisada', 'Taller']).withMessage('Course must be one of the following: Tecnología, Practicas, Taller'),
    validateField,
    deleteFileOnError,
    handleErrors
];

export const updatePostValidator = [
    param('id').notEmpty().withMessage('Post ID is required').isMongoId().withMessage('Invalid Post ID format'),
    body('title').optional().isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
    body('description').optional().isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
    body('category').optional().isIn(['Proyecto', 'Infografia', 'Documento', 'otro']) .withMessage('Category must be one of the following: Proyecto, Infografia, Documento, otro'),
    body('course').optional().isIn(['Tecnología', 'Practica Supervisada', 'Taller']).withMessage('Course must be one of the following: Tecnología, Practicas, Taller'),
    validateField,
    deleteFileOnError,
    handleErrors
];

export const commentValidator = [
    param('id').notEmpty().withMessage('Post ID is required').isMongoId().withMessage('Invalid Post ID format'),
    body('user').optional().isString().withMessage('User must be a string'),
    body('comment').notEmpty().withMessage('Comment is required').isLength({ min: 1 }).withMessage('Comment must be at least 1 character long'),
    validateField,
    deleteFileOnError,
    handleErrors
];

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const cors = require('cors');
const prisma = new PrismaClient();
const app = express();
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/test',  (req, res) => {
    try {
        res.status(200).json({ message: "Hello World" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get('/blogs', async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/blog/:id', async (req, res) => {
    try{
        const blog = await prisma.blog.findUnique({
            where: {
                id: Number(req.params.id)
            },
        });
        res.status(200).json(blog);
    } catch(error){
        res.status(500).json({ message: error.message }); 
    }
});

app.post('/blog', async (req, res) => {
    try {
        const blog = await prisma.blog.create({
            data: {
                title: req.body.title,
                desc: req.body.desc,
                content: req.body.content,
                image: req.body.image
            }
        });
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/blog/:id', async (req, res) => {
    try {
        const blog = await prisma.blog.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                title: req.body.title,
                desc: req.body.desc,
                content: req.body.content,
                image: req.body.image
            }
        });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/blog/:id', async (req, res) => {
    try {
        const blog = await prisma.blog.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
-- Some queries
SELECT f.nome AS funcionario,
    d.nome AS departamento,
    f.cargo,
    f.salario
    FROM Funcionario f
    JOIN Departamento d 
    ON f.id_departamento = d.id_departamento;

SELECT p.nome AS projeto,
    COUNT(te.cpf) AS total_funcionarios
    FROM Projeto p
    LEFT JOIN Trabalha_Em te 
    ON p.id_projeto = te.id_projeto
    GROUP BY p.id_projeto;

SELECT nome, orcamento
    FROM Departamento
    ORDER BY orcamento DESC;

SELECT p.descricao,
    SUM(c.quantidade) AS total_estoque
    FROM Peca p
    JOIN Contem c 
    ON p.id_peca = c.id_peca
    GROUP BY p.id_peca;

SELECT f.razao_social,
    p.descricao,
    fo.prazo_entrega
    FROM Fornece fo
    JOIN Fornecedor f 
    ON fo.cnpj = f.cnpj
    JOIN Peca p 
    ON fo.id_peca = p.id_peca;

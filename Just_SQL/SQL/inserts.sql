-- Some Inserts
INSERT INTO Departamento VALUES
(1, 'TI', '1130000001', 'ti@empresa.com', 'Carlos Silva', 150000.00),
(2, 'Engenharia', '1130000002', 'eng@empresa.com', 'Mariana Costa', 300000.00),
(3, 'Compras', '1130000003', 'compras@empresa.com', 'Ricardo Lima', 120000.00);

INSERT INTO Funcionario VALUES
('11111111111','João Souza','11911111111','joao@empresa.com','Rua A','10',NULL,'Centro','01000000','SP','SP','2022-01-10','Analista',5000.00,1),
('22222222222','Ana Lima','11922222222','ana@empresa.com','Rua B','20',NULL,'Centro','01000001','SP','SP','2021-03-15','Desenvolvedora',6500.00,1),
('33333333333','Pedro Santos','11933333333','pedro@empresa.com','Rua C','30',NULL,'Centro','01000002','SP','SP','2020-05-20','Engenheiro',8000.00,2),
('44444444444','Carla Mendes','11944444444','carla@empresa.com','Rua D','40',NULL,'Centro','01000003','SP','SP','2019-07-12','Compradora',4500.00,3);

INSERT INTO Projeto VALUES
(1,'Sistema ERP','Implantação de ERP','2025-01-01','2025-12-31','Em andamento',200000.00),
(2,'App Mobile','Desenvolvimento de aplicativo','2025-02-01','2025-10-30','Em andamento',150000.00),
(3,'Infraestrutura','Modernização de servidores','2025-03-01','2025-09-30','Concluido',100000.00);

INSERT INTO Peca VALUES
(1,'Hardware','HD 1TB','2025-01-10',350.00,'Ativa'),
(2,'Hardware','SSD 500GB','2025-01-15',420.00,'Ativa'),
(3,'Rede','Roteador Empresarial','2025-02-01',800.00,'Ativa'),
(4,'Periférico','Monitor 24','2025-02-10',900.00,'Inativa');

INSERT INTO Fornecedor VALUES
('12345678000101','Tech Distribuidora','1131111111','contato@tech.com','Rua X','100',NULL,'Centro','02000000','SP','SP','Lucas Martins'),
('98765432000102','InfoParts','1132222222','vendas@infoparts.com','Rua Y','200',NULL,'Centro','02000001','SP','SP','Fernanda Rocha');

INSERT INTO Deposito VALUES
(1,'Depósito Central','1133333333','deposito@empresa.com','Rua Z','300',NULL,'Centro','03000000','SP','SP',500,'Marcos Silva'),
(2,'Depósito Secundário','1134444444','deposito2@empresa.com','Rua W','400',NULL,'Centro','03000001','SP','SP',300,'Juliana Alves');

INSERT INTO Trabalha_Em VALUES
('11111111111',1,'2025-01-01',120,'Analista Funcional'),
('22222222222',1,'2025-01-05',200,'Desenvolvedora Backend'),
('33333333333',2,'2025-02-01',150,'Engenheiro Líder'),
('44444444444',3,'2025-03-01',90,'Compradora Técnica');

INSERT INTO Utiliza VALUES
(1,1,10,'2025-01-20'),
(1,2,5,'2025-01-25'),
(2,3,3,'2025-02-15'),
(3,4,8,'2025-03-10');

INSERT INTO Fornece VALUES
('12345678000101',1,7),
('12345678000101',2,5),
('98765432000102',3,10),
('98765432000102',4,15);

INSERT INTO Contem VALUES
(1,1,50),
(1,2,30),
(1,3,20),
(2,4,15);
